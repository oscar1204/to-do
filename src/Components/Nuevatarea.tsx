

export const Nuevatarea = () => {
  return (
    <div>
        
        <form>
            <label>
                Nueva terea
            </label>
            <input type="text"></input>
            <button  className="btn btn-primary" onClick={()=>Nuevatarea()}>
                Guardar
            </button>
            <hr/>
            
            </form>
    </div>
  )
}
