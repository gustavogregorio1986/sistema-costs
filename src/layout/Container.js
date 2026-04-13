import Styles from './Container.module.css';

function Container(props){
    return<diuv className={`${Styles.container} ${Styles[props.customClass]}`}>{props.children}</diuv>
}

export default Container;