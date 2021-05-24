
import React from 'react';
import styles from "./team.module.scss"
import AppBackground from "../components/AppBackground"


const cohort = {
  'AJ Al-Bawab':{
    'image':'/cohort/aj.jpeg',
    'classstanding':'Senior',
    'major':'Finance',
    'gpa':'4.1',
    'interests':'Coffee',
    'bio':'Insert Biography Here',
    'accomplishments':'Insert Accomplishments Here',
    'resume':'Will have resume attached'
    },

  'Jael Ortiz':{
    'image':'/cohort/jael.jpeg'},
  'Bronson Slattery':{
    'image': '/cohort/bronson.jpeg'},
  'Cameron Vandewiele':{
    'image':'/cohort/cameron.jpeg' },
  'Armani Cato':{
    'image': '/cohort/cato.jpeg'},
  'Cherechi Amalaha':{
    'image': '/cohort/cher.jpeg'},
  'Georgia Green':{
    'image': '/cohort/georgia.jpeg'},
  'Jenelle Ryan':{
    'image':'/cohort/jenelle.jpeg' },
  'Jennifer Cruz':{
    'image':'/cohort/jennifer.jpeg' },
  'Jonghwa Baek':{
    'image': '/cohort/jonghwa.jpeg'},
  'Leonard Cave':{
    'image': '/cohort/leonard.jpeg'},
  'Milton Wilkes':{
    'image': '/cohort/milton.jpeg'},
  'Minh Le':{
    'image': '/cohort/minh.jpeg'},
  'Nicky Park':{
    'image': '/cohort/nicky.jpeg'},
  'Pranshu Srivastav': {
    'image':'/cohort/pranshu.jpeg'},
  'Randall Anderson': {
    'image':'/cohort/randall.jpeg'},
  'Reed Deane':{
    'image': '/cohort/reed.jpeg'},
  'Will Long': {
    'image':'/cohort/will.jpeg'}}



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
        <div style={{margin:10, backgroundColor:'white',borderRadius:10}}>
        <p style={{textAlign:'center', color:'black'}}>
          {Object.keys(cohort).find(key => cohort[key] === src)}
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
        <h1>Panthers on Wall Street 2021</h1>
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
                 <p>{Object.keys(cohort).find(key => cohort[key].image === src)}</p>
               </div>

              <div className={styles.body_container}>


               <div className={styles.modal_lightdetails}>
                 <div style={{display:'flex'}}><div style={{fontWeight:'bold',marginRight:10}}>GPA:</div>{cohort[Object.keys(cohort).find(key => cohort[key].image === src)].gpa}</div>
                 <div style={{display:'flex'}}><div style={{fontWeight:'bold',marginRight:10}}>Class Designation:</div> {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].classstanding}</div>
                 <div style={{display:'flex'}}><div style={{fontWeight:'bold',marginRight:10}}>Interest:</div> {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].interests}</div>
               </div>
               <div style={{height:2, backgroundColor:'darkgrey', marginTop:10, marginBottom:10}}> </div>
               <div className={styles.modal_lightdetails}>
                 <div style={{display:'flex'}}><div style={{fontWeight:'bold',marginRight:10}}>Biography:</div>{cohort[Object.keys(cohort).find(key => cohort[key].image === src)].bio}</div>
                 <div style={{display:'flex'}}><div style={{fontWeight:'bold',marginRight:10}}>Accomplishments:</div> {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].accomplishments}</div>
                 <div style={{display:'flex'}}><div style={{fontWeight:'bold',marginRight:10}}>Resume:</div> {cohort[Object.keys(cohort).find(key => cohort[key].image === src)].resume}</div>
               </div>



              </div>
             
              </div>
              
            {/* <div className={styles.modal_flex_body}> */}
              {/* <p>{Object.keys(cohort).find(key => cohort[key].image === src)}</p> */}
         



            {/* <a href="/" className={styles.modal_close} onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a> */}
            {/* {hasPrev && <a href="/" className={styles.modal_prev} onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>} */}
            {/* {hasNext && <a href="/" className={styles.modal_next} onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>} */}
          </div>
        </div>
      </div>
    )
  }
}


const Team = () => {
  return (
    <div
      className={styles.header}
    >
      {/* <h1>Below is the 2021 Panthers on Wall Street Cohort!</h1> */}
      <section class={styles.gallery_container}>
      <Gallery />
      </section>
    </div>
  );
};
  
export default Team;