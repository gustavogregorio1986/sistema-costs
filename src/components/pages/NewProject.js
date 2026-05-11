import ProjectGroup from '../project/ProjectForm';
import styles from './Newproject.module.css';

function NewProject(){
    return (
        <div className={styles.newproject_container}>
           <h1>Criar Projeto</h1>
           <p>Criar seu projeto para depois adicionar os serviços</p>
           <ProjectGroup btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject;