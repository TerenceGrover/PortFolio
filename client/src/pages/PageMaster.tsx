import Bananas from '../components/Bananas'
import HSTW from '../components/HSTW'
import { MusiQ } from '../components/MusiQ'
import Wavvvs from '../components/Wavvvs'
import './styles/pages.css'

export default function PageMaster(props: { dark: boolean }) {
  return (
    <div className="master-page">
      <div className="page-title">
        {
          props.dark ? (
            <span>
              &lt; Coding /&gt;
            </span>
          ) : (
            <span>
              Photography
            </span>
          )
        }
      </div>
      <div className="page-sub-title">
        {
          props.dark ? (
            <span>
              For a couple years, I've been trying some funky stuff with code.
              My top road dog tech stack is <span id='mongo'>M</span><span id='express'>E</span><span id='react'>R</span><span id='node'>N</span>.
              <br/><span id='python-fanboy'>(I'm a bit of a <b>Python</b> fanboy, too.)</span><br/>
              <br />
              Go my child, explore!
            </span>
          ) : (
            <span>
              From portraits to products or street photography, I enjoy capturing subjects I'm familiar with.
              <br />
              Highlighting the charm of my surroundings is a fun mission.
              <br />
              If anything catches your eye, feel free to reach out!
            </span>
          )
        }
      </div>
      <section id="section-1" className='page-section'>
        <div className="section-title" id="hstw">
          {
            props.dark ? (
              <HSTW />
            ) : (
              <span>
                Portraits
              </span>
            )
          }
        </div>
      </section>
      <section id="section-2" className='page-section'>
        <div className="section-title" id="bananas">
          {
            props.dark ? (
              <Bananas />
            ) : (
              <span>
                Products
              </span>
            )
          }
        </div>
      </section>
      <section id="section-3" className='page-section'>
        <div className="section-title" id="musiq">
          {
            props.dark ? (
              <MusiQ />
            ) : (
              <span>
                Street
              </span>
            )
          }
        </div>
      </section>
      {/* for some reason, my key for four doesn't work, get ready for a bunch of 3+1 */}
      <section id="section-3+1" className='page-section'>
        <div className="section-title" id="wavvvs">
          {
            props.dark ? (
              <Wavvvs />
            ) : (
              <span>
                Landscape
              </span>
            )
          }
        </div>
      </section>
    </div>
  )
}