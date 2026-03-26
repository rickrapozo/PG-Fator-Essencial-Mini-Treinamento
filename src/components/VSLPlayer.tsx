import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Gauge, Volume1, Play } from 'lucide-react';
import { Slider } from "./ui/slider";

interface VSLPlayerProps {
  videoId: string;
  onStart?: () => void;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const VSLPlayer: React.FC<VSLPlayerProps> = ({ videoId, onStart }) => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState([50]);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let player: any;
    let timer: any;

    const initPlayer = () => {
      const playerElement = document.getElementById(`vsl-player-${videoId}`);
      if (!playerElement) return;

      player = new window.YT.Player(`vsl-player-${videoId}`, {
        videoId: videoId,
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
          disablekb: 1,
          origin: window.location.origin,
          iv_load_policy: 3,
          fs: 0,
          widget_referrer: window.location.origin
        },
        events: {
          onReady: (event: any) => {
            setIsReady(true);
            // Force mute and play for Smart Play effect
            event.target.mute();
            event.target.playVideo();
            event.target.setVolume(100);
            
            // Start progress tracking
            timer = setInterval(() => {
              if (player && player.getCurrentTime && player.getDuration) {
                const current = player.getCurrentTime();
                const total = player.getDuration();
                if (total > 0) {
                  const realProgress = (current / total) * 100;
                  setProgress(Math.min(realProgress * 1.1, 99.5));
                }
              }
            }, 1000);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPaused(true);
            } else if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPaused(false);
              // We only set isPlaying to true if it's actually moving
              // but we only trigger the "Smart Play Transition" via handleSmartPlayClick
            }
          }
        }
      });
      playerRef.current = player;
    };

    if (!window.YT || !window.YT.Player) {
      if (!document.getElementById('youtube-iframe-api')) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api';
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }

      const previousOnReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (previousOnReady) previousOnReady();
        initPlayer();
      };
    } else {
      initPlayer();
    }

    return () => {
      if (player && player.destroy) {
        player.destroy();
      }
      if (timer) clearInterval(timer);
    };
  }, [videoId]);

  const handleSmartPlayClick = () => {
    if (playerRef.current && isReady) {
      try {
        playerRef.current.unMute();
        playerRef.current.setVolume(100);
        playerRef.current.seekTo(0, true);
        playerRef.current.playVideo();
        setIsPlaying(true);
        setIsMuted(false);
        setIsPaused(false);
        if (onStart) onStart();
      } catch (err) {
        console.error("Smart play click failed:", err);
        // Fallback: simple unmute and play
        playerRef.current.unMute();
        playerRef.current.playVideo();
      }
    }
  };

  const handleTogglePlay = () => {
    if (playerRef.current && isReady) {
      const state = playerRef.current.getPlayerState();
      if (state === window.YT.PlayerState.PAUSED || state === window.YT.PlayerState.BUFFERING) {
        playerRef.current.playVideo();
        setIsPaused(false);
      } else {
        playerRef.current.pauseVideo();
        setIsPaused(true);
      }
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.setVolume(newVolume[0]);
      if (newVolume[0] > 0 && isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else if (newVolume[0] === 0 && !isMuted) {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
        playerRef.current.setVolume(volume[0] || 50);
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  const changeSpeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (playerRef.current) {
      const speeds = [1, 1.25, 1.5, 2];
      const currentIndex = speeds.indexOf(playbackSpeed);
      const nextIndex = (currentIndex + 1) % speeds.length;
      const nextSpeed = speeds[nextIndex];
      playerRef.current.setPlaybackRate(nextSpeed);
      setPlaybackSpeed(nextSpeed);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] border border-gold-dark group bg-black max-w-[400px] mx-auto"
    >
      {/* The YouTube Player Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div id={`vsl-player-${videoId}`} className="w-full h-full scale-[1.01]" />
      </div>

      {/* Transparent Interaction Overlay (allows pause/play after start) */}
      {isPlaying && (
        <div 
          onClick={handleTogglePlay}
          className="absolute inset-0 z-10 cursor-pointer"
        />
      )}

      {/* Smart Play Overlay (Initial) */}
      {!isPlaying && (
        <div 
          onClick={handleSmartPlayClick}
          className="absolute inset-0 z-20 bg-black/60 flex flex-col items-center justify-center cursor-pointer hover:bg-black/40 transition-all duration-300 px-6 text-center"
        >
          <div className="w-20 h-20 border-2 border-gold rounded-full flex items-center justify-center mb-5 shadow-[0_0_50px_rgba(212,175,55,0.4)] animate-pulse">
            <Play size={40} className="fill-gold text-gold ml-1" />
          </div>
          <div className="bg-gold/90 text-background px-6 py-2.5 rounded-full font-accent text-xs tracking-[2px] font-bold shadow-2xl uppercase">
            Clique para ouvir
          </div>
        </div>
      )}

      {/* Pause Overlay with Message */}
      {isPaused && (
        <div 
          onClick={handleTogglePlay}
          className="absolute inset-0 z-20 bg-black/70 flex flex-col items-center justify-center cursor-pointer px-8 text-center animate-in fade-in zoom-in duration-300"
        >
          <div className="w-16 h-16 border-2 border-gold rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            <Play size={30} className="fill-gold text-gold ml-1" />
          </div>
          <p className="text-gold font-accent text-base md:text-lg mb-2 leading-tight">
            Retorne de onde parou.
          </p>
          <p className="text-white/90 text-sm md:text-base font-light italic">
            Você está a um passo de se libertar das amarras emocionais...
          </p>
          <div className="mt-8 text-gold/60 text-[10px] uppercase tracking-[3px] animate-pulse">
            Clique para continuar
          </div>
        </div>
      )}

      {/* Fake Progress Bar (at the very bottom) */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 z-30 bg-white/10 overflow-hidden">
          <div 
            className="h-full bg-gold transition-all duration-1000 ease-linear shadow-[0_0_10px_rgba(212,175,55,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Custom Controls Bar */}
      {isPlaying && !isPaused && (
        <div className="absolute bottom-4 left-0 right-0 px-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <div className="flex flex-col gap-2">
            <button 
              onClick={(e) => { e.stopPropagation(); changeSpeed(e); }}
              className="w-10 h-10 bg-black/60 backdrop-blur-md border border-gold/30 rounded-full flex items-center justify-center text-gold text-[10px] font-bold shadow-lg"
              title="Velocidade"
            >
              {playbackSpeed}x
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); toggleMute(e); }}
              className="w-10 h-10 bg-black/60 backdrop-blur-md border border-gold/30 rounded-full flex items-center justify-center text-gold shadow-lg"
            >
              {isMuted || volume[0] === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>

          <div className="h-24 py-2 flex flex-col items-center justify-end group/volume">
             <div className="h-16 w-1 overflow-hidden">
                {/* Vertical slider could be nice but let's stick to simple or just icons for vertical */}
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VSLPlayer;
