import React from 'react';
import Masonry from 'react-masonry-component';
import ReactModal from 'react-modal';
import { DotLoader } from 'react-spinners';

const styles = {
  modalStyle: {
    maxHeight: "100%",
    maxWidth: "100%",
  }
};

class templateTab extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
       title: "",
       description: "",
       image_url: "",
       tags: "",
       open: false,
       loading: true,
       photosLists: props.photos
      };
      this.componentDidMount = this.componentDidMount.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }

  componentWillReceiveProps(nextProps) {
// on update
  this.setState({photosLists: nextProps.photos});
  }

  componentDidMount() {
    this.props.fetchPhotos(
      this.props.session.currentUser.id).then(
        setTimeout(() => this.setState({ loading: false }), 700));
  }

  handleOpen(url, description, title) {
    this.setState({open: true,
       title: title,
       description: description,
       image_url:url
     });
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    let masonryOptions = {
        transitionDuration: 0,
        gutter: 20,
        fitWidth: true
    };

    const { photos, session } = this.props;

      const modal = () => (
        <ReactModal
          isOpen={this.state.open}
          contentLabel={this.state.title}
          onRequestClose={this.handleClose}
          shouldFocusAfterRender={true}
          ariaHideApp={true}
          style={{
            overlay: {
            zIndex: 10,
          },
           content: {
            zIndex: 10,
            top: "3%",
            bottom: "3%",
              }
            }}
          >
          <img src={this.state.image_url} style={styles.modalStyle}/>
        </ReactModal>
      );

      function toTitleCase(str)
      {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }

    let elements = this.state.photosLists.map((tile) => (
      <li className="imageGridUser">
        <h1 className="imageGridTitle">{toTitleCase(tile.title)}</h1>
          <img src={tile.image_url}
            onClick={this.handleOpen.bind(this, tile.image_url, tile.description, tile.title)}
            key={tile.image_url}
            ></img>
        </li>
      )
    );

      if (this.state.loading) {
            return (
              <div className='sweet-loading'>
           <DotLoader
             color={'#FFB6C1'}
             loading={this.state.loading}
           />
          </div>
           );
         }
       else {
         return (
           <Masonry
               className={'my-gallery-class'}
               elementType={'ul'}
               options={masonryOptions}
               disableImagesLoaded={false}
               updateOnEachImageLoad={false}
               key={elements.title}
           >
               {elements}
               {modal()}
           </Masonry>
         );
       }
  }
}

export default templateTab;
