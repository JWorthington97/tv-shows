import showList from '../../show_list.json'
import ShowShow from './ShowShow'

function Shows(): JSX.Element {
    return <>
    {/* <select>
    {showList.map((show) => (
            //Need to specify the value field, else the default is the HTML text
            <option value={show.id} key={show.id}>
              {show.name}
            </option>
    ))}        
    </select> */}
    
    <div className="shows">
    {showList.map((show) => 
        <ShowShow key = {show.id} show = {show}/>
    )}
    </div>
    </>
}

export default Shows