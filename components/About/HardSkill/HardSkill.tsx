import { useTheme } from '@/utils/themeContext';
import ReactSvg from '@/public/icons/react.svg';
import TypeScriptSvg from '@/public/icons/typescript.svg';
import JavascriptSvg from '@/public/icons/javascript.svg';
export default function HardSkill() {
  const { loaded } = useTheme();
  return (
    <div className="text-primaryText text-sm mt-5 mx-auto grid grid-cols-12 gap-3">
      <div className="col-span-6">
        <h2 className="text-secondaryText font-bold block">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            Specialists:
          </span>
        </h2>
        <ul className="flex ml-2">
          <li className="w-16 mr-5">
            <span>
              <ReactSvg fill="#61DAFB" />
            </span>
          </li>
          <li className="w-16 mr-5">
            <TypeScriptSvg fill="#007acc" />
          </li>

          <li className="w-16 mr-5">
            <JavascriptSvg fill="#f7df1e" />
          </li>
        </ul>
      </div>
      <div className="col-span-6">
        <h2 className="text-secondaryText font-bold block">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            Other skills:
          </span>
        </h2>
        <dl className="flex flex-col ">
          <dt className="font-bold text-secondaryText">
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Langueges
            </span>
          </dt>
          <dd>
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Node.js, Scss/Sass, CSS3, HTML5
            </span>
          </dd>
          <dt className="font-bold text-secondaryText">
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Frameworks
            </span>
          </dt>
          <dd>
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Gatsby.js, Next.js, Redux, Material-UI, TailwindCSS,
              styled-components
            </span>
          </dd>
          <dt className="font-bold text-secondaryText">
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Others
            </span>
          </dt>
          <dd>
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Firebase, MongoDB, Figma
            </span>
          </dd>
        </dl>
      </div>
    </div>
  );
}

{
  /* <h2 className="text-secondaryText font-bold block">Specialists:</h2>
<ul className="flex">
  <li className="w-16 mr-8">
    <span>
      <ReactSvg fill="#61DAFB" />
    </span>
  </li>
  <li className="w-16 mr-8">
    <TypeScriptSvg fill="#007acc" />
  </li>

  <li className="w-16 mr-8">
    <JavascriptSvg fill="#f7df1e" />
  </li>
</ul>
<h2 className="text-secondaryText font-bold block">Other skills:</h2>
<ul className="flex">
  <li className="w-16 mr-8">
    <span>
      <ReactSvg fill="#61DAFB" />
    </span>
  </li>
  <li className="w-16 mr-8">
    <TypeScriptSvg fill="#007acc" />
  </li>

  <li className="w-16 mr-8">
    <JavascriptSvg fill="#f7df1e" />
  </li>
</ul> */
}
