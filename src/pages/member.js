import React from 'react';
import styles from "./member.module.scss"



class Member extends React.Component {
  render() {
    const cohort = this.props.location.members;
    const member = this.props.location.membername;
    console.log(cohort)
    console.log(member)
    return (
    
      <div style={{height: '100vh'}}>
  
      <div className={styles.appbody}>
       
  
      <h1  className={styles.header1}>{cohort[Object.keys(cohort).find(key => key === member)].name }</h1>
        </div>
    
       </div>
    
    );
  }



}  
export default Member;