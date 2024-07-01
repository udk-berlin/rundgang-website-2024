/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { MouseEvent, useCallback, useRef, useState } from 'react';
import { ItemContent } from '@/types/item';

const padTime = (i: number) => (i < 10 ? `0${i}` : `${i}`);

export const minsToHHMMSS = (secs: number) => {
  const roundedSecs = Math.round(secs);

  const hours = Math.floor(roundedSecs / 3600);
  const minutes = Math.floor((roundedSecs - hours * 3600) / 60);
  const seconds = roundedSecs - hours * 3600 - minutes * 60;

  return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
};

const AudioPlayer = ({ item }: { item: ItemContent }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleClickPay = useCallback(() => {
    if (audioRef?.current && duration == 0) {
      setDuration(audioRef.current.duration);
    }
    if (isPlaying && !audioRef.current.paused) {
      audioRef?.current?.pause();
      setIsPlaying(false);
    } else if (audioRef?.current?.paused) {
      audioRef?.current?.play();
      setIsPlaying(true);
    }
  }, [isPlaying, audioRef?.current?.paused]);

  const handleTimeUpdate = useCallback(
    (e) => {
      setCurrentTime(e.target.currentTime);
      if (duration > 0 && duration - e.target.currentTime < 0.05) {
        setIsPlaying(false);
      }
    },
    [currentTime],
  );

  const handleChangeTime = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      if (audioRef?.current) {
        audioRef?.current?.pause();
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
        audioRef?.current?.play();
      }
    },
    [currentTime],
  );

  return (
    <div className="w-100 flex-start flex items-center text-center">
      <audio
        id="player"
        ref={audioRef}
        onTimeUpdate={(e) => handleTimeUpdate(e)}
      >
        <source src={item.content} type="audio/mpeg" />
      </audio>
      <button className="pointer border-md " onClick={() => handleClickPay()}>
        {isPlaying ? <span>&#9632;</span> : <span>&#9654;</span>}
      </button>
      <span>{minsToHHMMSS(currentTime)}</span>
      <input
        className="w-100 flex-grow-1 relative float-left m-0 h-[19px] p-0 "
        type="range"
        max={duration}
        min={0}
        value={currentTime}
        onChange={(e) => handleChangeTime(e)}
      />

      <span>{minsToHHMMSS(duration)}</span>
    </div>
  );
};

export default AudioPlayer;
