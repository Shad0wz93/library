import '../../assets/css/styleTabs.css'

/**
 * Interface représentant la Tabs
 */
interface PropsTabs{
    /** Nom de la page courrant */
    pageCurrent : string

    /** Listes des titres présent dans la tabs qui auront des liens de redirection */
    titles : string[]

    /** Liste des liens qui seront attribués aux titres */
    links : string[]

    /** Couleur de fond du titre qui sera sur-volé */
    overView : string
}

/**
 * Composant Tabs listant les liens sous forms de navbar
 * @param pageCurrent - Nom de la page courrant où ce trouve le tabs
 * @param titles - Listes des titres présent dans la tabs qui auront des liens de redirection
 * @param links - Liste des liens qui seront attribués aux titres
 * @param overView - Couleur de fond du titre qui sera sur-volé
 * @returns Composant TSX Tabs
 */
const Tabs : React.FC<PropsTabs> = ({pageCurrent, titles, links, overView}) => {
    if (titles.length != links.length) return null
    const listTitlesLinks = []
    for (let i=0;i<titles.length;i++){
        listTitlesLinks.push(
            <div className={`tab ${overView}`}>
                <a href={links[i]}>{titles[i]}</a>
            </div>
        )
    }
    return(
        <div className="tabs-container">
            <div className="tabs-header">
                <div className={`tab active ${overView}`}>{pageCurrent}</div>
                {listTitlesLinks}
            </div>
        </div>
    )
}

export default Tabs