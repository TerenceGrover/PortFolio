import { memo, useEffect, useMemo, useState } from 'react';
import Bananas from '../components/CodingSections/Bananas';
import HSTW from '../components/CodingSections/HSTW';
import MusiQ from '../components/CodingSections/MusiQ';
import GridCollection from '../components/CodingSections/GridCollection';
import Portrait from '../components/PhotoSections/Portrait';
import Products from '../components/PhotoSections/Products';
import Street from '../components/PhotoSections/Street';
import Landscape from '../components/PhotoSections/Landscape';
import MouseContext from '../contexts/MouseContext';
import './styles/pages.css';
import Footer from '../components/Footer';
import GitHubButton from 'react-github-btn'

const MemoizedHSTW = memo(HSTW);
const MemoizedPortrait = memo(Portrait);
const MemoizedBananas = memo(Bananas);
const MemoizedProducts = memo(Products);
const MemoizedMusiQ = memo(MusiQ);
const MemoizedStreet = memo(Street);
const MemoizedGridCollection = memo(GridCollection);
const MemoizedLandscape = memo(Landscape);

export default function PageMaster(props: { dark: boolean, page: string, setPage: Function }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
            Along my <span id='journey'>coding journey</span>, I came up some <span id='funky'>funky projects</span>. Mostly using the MERN stack.
            <br />
            <span id="python-fanboy">
              (I'm a bit of a <b>Python</b> fanboy, too.)
            </span>
            <br />
            <br />
            Go my child, <span id='explore'>explore</span>!
            <br />
            <div id="github-follow">
              <GitHubButton href="https://github.com/TerenceGrover" data-size="large" aria-label="Follow @TerenceGrover on GitHub">Follow @TerenceGrover</GitHubButton>
            </div>
          </span>
        ) : (
          <span>
            Portraits, products, and street photography are my main focuses.
            <br />
            I'm open to collaborations and commissions. Feel free to reach out on
            <a href="https://www.instagram.com/terencegrover/" target="_blank" rel="noreferrer"> Instagram</a> or {' '}
            <a href='mailto:terencegrover@gmail.com'>email</a>!
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
            {props.dark ? <MemoizedGridCollection projects={
              [
                {
                  title: 'Wavvvs',
                  subtitle: 'A minimal audio sharing platform',
                  image: 'https://camo.githubusercontent.com/4ac4109a5647a283c2c40067fcec34eeb92c00a4511ef95fc01d2bc20629ded5/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646c73686667776a612f696d6167652f75706c6f61642f76313637363139393234322f6c777678686f64736769716f71397963793077612e706e67',
                  link: 'https://github.com/MateoPresaCastro/wavvvs'
                },
                {
                  title: 'License Man',
                  subtitle: 'A license plate recognition game',
                  image: 'https://user-images.githubusercontent.com/109336882/232229522-d6f522c9-3e78-42be-b478-e9be869f447e.png',
                  link: 'https://github.com/TerenceGrover/LicenseMan'
                },
                {
                  title: 'Three JS Logo',
                  subtitle: 'A 3D logo made with Three JS',
                  image: 'https://user-images.githubusercontent.com/109336882/232230530-984f5639-e500-4592-8bb6-c8b0945e120f.png',
                  link: 'https://github.com/TerenceGrover/Logo-Three-JS'
                }
              ]
            } /> : <MemoizedLandscape />}
          </div>
        </section>
      </MouseContext.Provider>
      <Footer setPage = {props.setPage} />
    </div>
  );
}
