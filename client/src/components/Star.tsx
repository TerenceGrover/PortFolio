import GitHubButton from 'react-github-btn';
import './styles/star.css';

export default function Star(props: { repo: string }) {
  const link = `https://github.com/TerenceGrover/${props.repo}`;

  return (
    <div id="github-star">
      <GitHubButton
        href={link}
        data-color-scheme="no-preference: dark; light: dark; dark: dark;"
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star TerenceGrover/HSTW on GitHub"
      >
        Star
      </GitHubButton>
    </div>
  );
}
