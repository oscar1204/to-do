import {Nuevatarea} from './Components/Nuevatarea';
import {Consultar} from './Components/Consultar';
import {Estado} from './Components/Estado'
 const App = () => {
  return (
    <div>
        <h3>
            ToDo
        </h3>
        <hr/>
        <Nuevatarea></Nuevatarea>
        <Consultar></Consultar>
        <Estado></Estado>


    </div>
  )
}
export default App