import { memo, useEffect, useMemo, useState } from 'react';
import Bananas from '../components/Bananas';
import HSTW from '../components/HSTW';
import { MusiQ } from '../components/MusiQ';
import Wavvvs from '../components/Wavvvs';
import Portrait from '../components/Portrait';
import Products from '../components/Products';
import './styles/pages.css';
import Street from '../components/Street';
import MouseContext from '../contexts/MouseContext';
import Landscape from '../components/Landscape';

const MemoizedHSTW = memo(HSTW);
const MemoizedPortrait = memo(Portrait);
const MemoizedBananas = memo(Bananas);
const MemoizedProducts = memo(Products);
const MemoizedMusiQ = memo(MusiQ);
const MemoizedStreet = memo(Street);
const MemoizedWavvvs = memo(Wavvvs);

export default function PageMaster(props : {dark : boolean}) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e : MouseEvent) => {
      if (e.clientX % 2 === 0 && e.clientY % 2 === 0) return;
      setMouse({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const memoizedMouse = useMemo(() => mouse, [mouse]);
  const memoizedSetMouse = useMemo(() => setMouse, [setMouse]);

  return (
    <div className="master-page">
      <div className="page-title">
        {props.dark ? <span>&lt; Coding /&gt;</span> : <span>Photography</span>}
      </div>
      <div className="page-sub-title">
        {props.dark ? (
          <span>
            For a couple years, I've been trying some funky stuff with code. My top road dog tech stack is <span id="mongo">M</span>
            <span id="express">E</span>
            <span id="react">R</span>
            <span id="node">N</span>.
            <br />
            <span id="python-fanboy">
              (I'm a bit of a <b>Python</b> fanboy, too.)
            </span>
            <br />
            <br />
            Go my child, explore!
            <br />
            TODO: Add a link to my Github + a keyword counter
          </span>
        ) : (
          <span>
            From portraits to products or street photography, I enjoy capturing subjects I'm familiar with.
            <br />
            Highlighting the charm of my surroundings is a fun mission.
            <br />
            If anything catches your eye, feel free to reach out!
          </span>
        )}
      </div>
      <MouseContext.Provider value={{ mouse: memoizedMouse, setMouse: memoizedSetMouse }}>
        <section id="section-1" className="page-section">
          <div className="section-title">{props.dark ? <MemoizedHSTW /> : <MemoizedPortrait />}</div>
        </section>
        <section id="section-2" className="page-section">
          <div className="section-title">{props.dark ? <MemoizedBananas /> : <MemoizedProducts />}</div>
        </section>
        <section id="section-3" className="page-section">
          <div className="section-title">
            {props.dark ? <MemoizedMusiQ /> : <MemoizedStreet />}
          </div>
        </section>
        {/* for some reason, my key for four doesn't work, get ready for a bunch of 3+1 */}
        <section id="section-3+1" className="page-section">
          <div className="section-title">
            {props.dark ? <MemoizedWavvvs /> : <Landscape />}
          </div>
        </section>
      </MouseContext.Provider>
    </div>
  );
}
