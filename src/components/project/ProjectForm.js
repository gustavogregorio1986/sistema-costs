function ProjectGroup(){
     return (
        <form>
           <div>
              <input type="text" placeholder="Nome do projeto" />
           </div>
           <div>
              <input tye="number" placeholder="Orçamento do projeto" />
           </div>
           <div>
              <select name="category_id">
                 <option disabled selected>Selecione a categoria</option>
              </select>
           </div>
           <div>
              <input type="submit" value="Criar projeto" />
           </div>
        </form>
     )
}

export default ProjectGroup;