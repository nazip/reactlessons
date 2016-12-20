// import React from 'react';
// var Img = require('img');

// class Img extends React.Component {
//   render() {
//     return React.createElement(
//       'img',
//       {src: this.props.src,
//        width: this.props.width,
//        height: this.props.height,
//        alt: this.props.alt }
//     );
//   }
// }

// class TextBox extends React.Component {
//   render() {
//     return React.createElement(
//       'input', this.props.options
//     );
//   }
// }




// const anyElement = function() {
//   class htmlElem extends React.Component {
//     render() {
//       return React.createElement(
//         'img', this.props.options
//       );
//     }
//   }
// }

class TextBox extends React.Component {
  render() {
    return <span >{this.props.children}</span>
  }
}

class Img extends React.Component {
  render() {
    return React.DOM.img(this.props.attrImg);
  }
}

class BlogItem extends React.Component {
  constructor(props) {
    super(props);

      console.log( this.props.BlogItems.map(function(blog) {
               return blog;
//               <div>
//                 <TextBox children={blog.txt1} />
//                 <Img attrImg={blog.img} />
//               </div>
             }));

         // this.props.BlogItems.forEach(function(blog) {
         //    console.log(blog);
         // });
  }
  render() {
      return this.props.BlogItems.map(function(blog) {
               return
               <div>
                 <TextBox children={blog.txt1} />
                 <Img attrImg={blog.img} />
               </div> ;
             });

    // return <div>
    //          <TextBox children={this.props.BlogItems.txt1} Img attrImg={this.props.BlogItems.img} />
    //          <Img attrImg={this.props.BlogItems.img} />
    //        </div>
  }
}


// const attrImg = {src:"card.png", width:"100", height:"100", alt:"image not found"};
// ReactDOM.render(
//   React.createElement(Img, {attrImg}, null),
//   document.getElementById('app')
// );

// const attrTextBox = {type: "text", size: "20"};
// ReactDOM.render(
//   React.createElement(TextBox, {attrTextBox}, "some text"),
//   document.getElementById('app')
// );



const BlogItems = [{img: {src:"card.png", width:"100", height:"100", alt:"image not found"},
                   txt: {type: "text", size: "20"}, txt1: "eee1"},
                    {img: {src:"card.png", width:"100", height:"50", alt:"image not found"},
                   txt: {type: "text", size: "20"}, txt1: "eee2"},
                    {img: {src:"card.png", width:"100", height:"30", alt:"image not found"},
                   txt: {type: "text", size: "20"}, txt1: "eee3"}];

ReactDOM.render(
  React.createElement(BlogItem, {BlogItems}, null),
  document.getElementById('app')
);




// renderComponent({compName: "input", type:"text", size:"100"}, 'app');
// renderComponent(input, {type:"text", size:"100"}, 'app');

// class Img extends React.Component {
//   render() {
//     return <img src={this.props.src}
//                 width={this.props.width}
//                 height={this.props.height}
//                 alt={this.props.alt} />;
//   }
// }

// ReactDOM.render(
//   <Img src="card.png" width="100" height="100" alt="image not found" />,
//   document.getElementById('app')
// );
