
import React from 'react';
import styles from "./team.module.scss"
import AppBackground from "../components/AppBackground"
const imgUrls = ['/cohort/aj.jpeg','/cohort/jael.jpeg','/cohort/bronson.jpeg','/cohort/cameron.jpeg','/cohort/cato.jpeg','/cohort/cher.jpeg','/cohort/georgia.jpeg','/cohort/jenelle.jpeg','/cohort/jennifer.jpeg','/cohort/jonghwa.jpeg','/cohort/leonard.jpeg','/cohort/milton.jpeg','/cohort/minh.jpeg','/cohort/nicky.jpeg','/cohort/pranshu.jpeg','/cohort/randall.jpeg','/cohort/reed.jpeg','/cohort/will.jpeg'
];
const names = ['AJ Al-Bawab','Jael Ortiz','Bronson Slattery','Cameron Vandewiele','Armani Cato','Cherechi Amalaha','Georgia Green','Jenelle Ryan','Jennifer Cruz','Jonghwa Baek','Leonard Cave','Milton Wilkes','Minh Le','Nicky Park','Pranshu Srivastav','Randall Anderson','Reed Deane','Will Long'];


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
      <div onClick={(e) => this.openModal(e, index)}>
        <img src={src} alt='' key={src} style={{}} />
        <div style={{margin:10, backgroundColor:'white',borderRadius:10}}>

        <p style={{textAlign:'center', color:'black'}}>
          {names[index]}
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
          {imgUrls.map(this.renderImageContent)}
        
        </div>
        <GalleryModal 
          closeModal={this.closeModal} 
          findPrev={this.findPrev} 
          findNext={this.findNext} 
          hasPrev={this.state.currentIndex > 0} 
          hasNext={this.state.currentIndex + 1 < imgUrls.length} 
          src={imgUrls[this.state.currentIndex]} 
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
      console.log('whut')
      return null;
    }
    return (
      <div>
        <div className={styles.modal_overlay} onClick={closeModal}></div>
        <div isOpen={!!src} className={styles.modal}>
          <div className={styles.modal_body}>
            <a href="/" className={styles.modal_close} onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
            {hasPrev && <a href="/" className={styles.modal_prev} onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
            {hasNext && <a href="/" className={styles.modal_next} onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
            <img src={src} alt="" />
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