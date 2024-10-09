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
            <div>
                <input type="checkbox" id={listChek[i]} name={listChek[i]}/>
                <label htmlFor={listChek[i]}>{listChek[i]}</label>
            </div>
        )
    }

    return (
        <div className="custom-checkbox">
            <h1>{titleBox}</h1>
            <br/>
            {html}
        </div>
    )
}
export default CheckBox