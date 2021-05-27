
import React from 'react';
import styles from "./team.module.scss"
import { Link } from 'react-router-dom';
import cohortdata from '../cohort'



function fisherYates ( myArray ) {
  var m = Object.keys(myArray).length, t, i;
    while ( m ) { 
      
      i = Math.floor(Math.random() * --m);
        
        t = myArray[m];
        myArray[m] = myArray[i];
        myArray[i] = t;
    }
    return myArray;
}

const cohort = fisherYates(cohortdata)
const listItems = []

Object.keys(cohort).map((key) => listItems.push(cohort[key].image));


class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
   
    return (
      <div>

      <div className={styles.imgBlock} onClick={(e) => this.openModal(e, index)}>
        <img src={src} alt='' key={src} style={{}} />
        </div>
        <div style={{marginBottom:10,marginTop:5,marginLeft:20,marginRight:20, backgroundColor:'white',borderRadius:10}}>
        <p style={{textAlign:'center', color:'black'}}>

          {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].name}
        </p>
      </div>
      </div>
    ) 
  }
  openModal(e, index) {
    this.setState ({ currentIndex: index });
  }
  closeModal(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState ({ currentIndex: null });
  }
  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex -1
    }));
  }
  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }
  render() {
    return (
      <div className={styles.gallery_container}>
        <div className={styles.h1container}>

        <h1>Panthers on Wall Street 2021</h1>
        </div>
        <div className={styles.gallery_grid}>

        {listItems.map(this.renderImageContent)}
        
        </div>
        <GalleryModal 
          closeModal={this.closeModal} 
          findPrev={this.findPrev} 
          findNext={this.findNext} 
          hasPrev={this.state.currentIndex > 0} 
          hasNext={this.state.currentIndex + 1 < listItems.length} 
          src={listItems[this.state.currentIndex]} 
        />
      </div>
    )
  }
}

class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }  
  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27)
      this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev)
      this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext)
      this.props.findNext();
  }


  
  render () {
    const path = './resumes/aj.pdf'
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
    if (!src) {
      return null;
    }
    return (
      <div>
        <div className={styles.modal_overlay} onClick={closeModal}></div>
        <div isOpen={!!src} className={styles.modal}>
          <div className={styles.modal_body}>
            <img className={styles.modal_flex_image} src={src} alt="" />
              <div className={styles.modal_text_box}>
               <div className={styles.modal_header}>
                 <p>{cohort[Object.keys(cohort).find(key => cohort[key].image === src)].name}</p>
               </div>

              <div className={styles.body_container}>


               <div className={styles.modal_lightdetails}>
                 {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].gpa && <div style={{display:'flex',flexDirection:'column'}}><div style={{fontWeight:'bold',marginRight:10}}>GPA:</div>{cohort[Object.keys(cohort).find(key => cohort[key].image === src)].gpa}</div>}
                 {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].classstanding && <div style={{display:'flex',flexDirection:'column'}}><div style={{fontWeight:'bold',marginRight:10}}>Class Designation:</div> {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].classstanding}</div>}
                 {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].interests && <div style={{display:'flex',flexDirection:'column'}}><div style={{fontWeight:'bold',marginRight:10}}>Interest:</div> {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].interests}</div>}
               </div>
               {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].interests && cohort[Object.keys(cohort).find(key => cohort[key].image === src)].classstanding && cohort[Object.keys(cohort).find(key => cohort[key].image === src)].gpa && <div style={{height:2, backgroundColor:'darkgrey', marginTop:10, marginBottom:10}}> </div>}

               <div className={styles.modal_lightdetails}>
               {/* {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].bio && <div style={{display:'flex',flexDirection:'column'}}><div style={{fontWeight:'bold',marginRight:10}}>Biography:</div>{cohort[Object.keys(cohort).find(key => cohort[key].image === src)].bio}</div>} */}
                <div className={styles.modal_button}>

              
               <Link className={styles.modal_link} to={{pathname: "/member", membername: Object.keys(cohort).find(key => cohort[key].image === src), members:cohort}} >Full Details</Link>
                </div>

                 {/* {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].accomplishments && <div style={{display:'flex',flexDirection:'column'}}><div style={{fontWeight:'bold',marginRight:10}}>Accomplishments:</div> {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].accomplishments}</div>} */}
                 {/* {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].resume && <div style={{display:'flex',flexDirection:'column'}}><div style={{fontWeight:'bold',marginRight:10}}>Resume:</div> {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].resume}</div>} */}
            
               {/* <a href={cohort[Object.keys(cohort).find(key => cohort[key].image === src)].resume}>Click here for my pdf</a> */}
               </div>

              </div>
             
              </div>
              
          


            {/* <a href="/" className={styles.modal_close} onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a> */}
            {hasPrev && <a href="/" className={styles.modal_prev} onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
            {hasNext && <a href="/" className={styles.modal_next} onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
          </div>
        </div>
      </div>
    )
  }
}


const Team = () => {
  return (
    <div>
      <section class={styles.gallery_container}>
      <Gallery />
      </section>
    </div>
  );
};
  
export default Team;