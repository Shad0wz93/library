import { useEffect } from "react";
import "../../../../assets/css/pages/input.css";
import { RESUME_DATA } from "../../../../data/data";
import Navbar from "../../../../components/presentation/Navbar";
import Sidebar from "../../../../components/presentation/Sidebar";
import Prism from "prismjs";

export default function InputPage() {
  //Hook useEffect pour exécuter une action après le montage du composant
  useEffect(() => {
    // Appelle Prism.highlightAll() pour appliquer la coloration syntaxique au contenu de la page après le rendu
    Prism.highlightAll();
  }, []); // Le tableau de dépendances vide assure que cette fonction s'exécute seulement une fois après le premier rendu.

  const htmlSnippet = `
    &lt;Input propsInput1="prop1" propsInput2="prop2" propsInput3="prop3"/>;
  `;

  // Récupération des données depuis le fichier data
  const props = RESUME_DATA.content.atoms.component1.presentation.props;

  return (
    <div>
      <Navbar />
      <div className="body-input">
        <Sidebar />
        <div className="body-input-presentation">
          <div className="body-input-header">
            <h1>{RESUME_DATA.content.atoms.component1.name}</h1>
            <h3>{RESUME_DATA.content.atoms.component1.description}</h3>
          </div>
          <div className="body-input-text">
            <h2>{RESUME_DATA.content.atoms.component1.presentation.title}</h2>
            <div className="example-component"></div>
            <pre>
              <code
                className="language-html line-numbers"
                data-prismjs-copy="Copy the HTML snippet!"
                dangerouslySetInnerHTML={{ __html: htmlSnippet }}
              ></code>
            </pre>
            <div className="description-componant">
              <h2>{props.title}</h2>
              <p>{props.description}</p>
              <ul className="props-list">
                {/* Boucle sur chaque prop du fichier data pour afficher son titre et sa description. */}
                {Object.entries(props).map(([key, propData]) => {
                  if (typeof propData === "object") {
                    return (
                      <li key={key}>
                        <h3>{propData.title}</h3>
                        <p>{propData.description}</p>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
