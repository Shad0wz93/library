import '../../assets/css/styleTabs.css'

interface PropsTabs{
    pageCurrent : string
    titles : string[]
    links : string[]
    overView : string
}

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