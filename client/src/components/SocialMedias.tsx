import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';
import './styles/social-medias.css'

export default function SocialMedias () {
  return (
    <div id="social-medias">
      <a href="https://www.instagram.com/tgfolio/" target='_blank'>
        <AiOutlineInstagram />
      </a>
      <a href="https://github.com/terencegrover" target='_blank'>
        <AiOutlineGithub />
      </a>
    </div>
  )
}