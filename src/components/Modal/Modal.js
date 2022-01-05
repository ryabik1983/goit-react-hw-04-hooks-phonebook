// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
// import styles from './Modal.css';

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {
//   componentDidMount() {
//     console.log('Modal componentDidMount');
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     console.log('Modal component WillUnmount');
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   handleBackdropClick = e => {
//     // console.log('backdropClick')
//     // console.log('event.currentTarget:', e.currentTarget);
//     // console.log('target:', e.target);
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div
//         className={styles.Modal__backdrop}
//         onClick={this.handleBackdropClick}
//       >
//         <div className={styles.Modal__content}> {this.props.children}</div>
//       </div>,
//       modalRoot,
//     );
//   }
// }
