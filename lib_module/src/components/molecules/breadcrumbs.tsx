import '../../assets/css/styleBreadCrumbs.css'

interface PropsBreadCrumbs{
    listOnglet : string[]
    listLien : string[]
    bkColor: string
}

const BreadCrumbs: React.FC<PropsBreadCrumbs> = ({listOnglet, listLien, bkColor}) =>{
    let htmlElement = []
    for (let i=0;i<listOnglet.length;i++){
        htmlElement.push(
            <li >
                <a href={listLien[i]}>{listOnglet[i]}</a>
            </li>
        )
    }
    return (
        <ul className={`breadcrumb ${bkColor}`}>
            {htmlElement}
        </ul>
    
    )
}

export default BreadCrumbs