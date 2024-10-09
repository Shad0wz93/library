import '../../assets/css/styleCheckBox.css'

interface PropsChekBox{
    titleBox : string
    listChek : string[]
    bkColor : string
}

const CheckBox:React.FC<PropsChekBox> = ({titleBox,listChek,bkColor}) => {
    let html = []
    for (let i=0;i<listChek.length;i++){
        html.push(
            <div className='label-check'>
                <input type="checkbox" id={listChek[i]} name={listChek[i]}/>
                <label htmlFor={listChek[i]}>{listChek[i]}</label>
            </div>
        )
    }

    return (
        <div className={`custom-checkbox ${bkColor}`}>
            <h1>{titleBox}</h1>
            <div className='container-label-check'>
                {html}
            </div>
        </div>
    )
}
export default CheckBox