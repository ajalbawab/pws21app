
import React from 'react';
import styles from "./member.module.scss"
import queryString from 'query-string';
import cohort from '../cohort'





class Member extends React.Component {
  


  render() {
    const values = queryString.parse(this.props.location.search);
    const id = values.q
    let member = Object.keys(cohort).find(key => key === id)

    return (
      <div>
      <section class={styles.gallery_container}>
      <div style={{height: '94vh'}}>

      <div className={styles.gallery_container}>
        <div className={styles.h1container}>

        <h1>{cohort[member].name }</h1>
        </div>


        <div className={styles.modalContainer}>


        <div className={styles.modal_body}>
            <img className={styles.modal_flex_image} src={cohort[member].image} alt="" />
              <div className={styles.modal_text_box}>
    
              <div className={styles.body_container}>


               <div className={styles.modal_firstlightdetails}>
                 {cohort[member].gpa && <div style={{display:'flex'}}><div style={{fontWeight:'bold',marginRight:10}}>GPA:</div>{cohort[member].gpa}</div>}
                 {cohort[member].classstanding && <div style={{display:'flex'}}><div style={{fontWeight:'bold',marginRight:10}}>Class Designation:</div> {cohort[member].classstanding}</div>}
                 {cohort[member].interests && <div style={{display:'flex'}}><div style={{fontWeight:'bold',marginRight:10}}>Interest:</div> {cohort[member].interests}</div>}
               </div>
               {cohort[member].gpa && cohort[member].classstanding && cohort[member].interests && <div style={{height:2, backgroundColor:'black', marginTop:10, marginBottom:10}}> </div>}
               <div className={styles.modal_deepdetails}>
               {cohort[member].bio && <div style={{display:'flex'}}><div style={{fontWeight:'bold',marginRight:10}}>Biography:</div>{cohort[member].bio}</div>}
                 {cohort[member].accomplishments && <div style={{display:'flex'}}><div style={{fontWeight:'bold',marginRight:10}}>Accomplishments:</div> {cohort[member].accomplishments}</div>}
                 {cohort[member].resume && <div style={{display:'flex'}}><div style={{fontWeight:'bold',marginRight:10}}>Resume:   </div><a href={cohort[member].resume}>Click to view {cohort[member].name }'s' resume</a></div>}
                 
               </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
      </section>
      </div>
    )
  }
}




  
export default Member;