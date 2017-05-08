$(document).ready(function(){
  $('#note-form').on('submit', function(event) {
    event.preventDefault()
    const happy = $('#happy').val()
    console.log(happy)
    // debugger
    // $('#comment-list').append(this.render)
    $('#comment-list').append(`<li>${happy}</li>`)
  })

//ES5

  function Comment(text) {
    this.text = text;
  }

  Comment.prototype.render = function() {
    return `<li>${this.text}</li>`
  }

  function CommentList() {
    this.list = []

    this.render = function() {
      var eachEle = this.list.map(function(ele) {
        return `<li>${ele.text}</li>`
      }).join(" ")
      return `<ul>${eachEle}</ul>`
    }

    this.addComment = function(string) {
      var newComment = new Comment(string)
      this.list.push(newComment);
    }
  }
})


///////////////////////////////////////////////////
//ES6

// class Comment() {
//   constructor(text) {
//     this.text = text;
//   }
//
//   render() {
//     return `<li>${this.text}</li>`
//   }
// }
//
// class CommentList() {
//   constructor() {
//     this.list = []
//   }
//
//   render() {
//     var eachEle = this.list.map(function(ele) {
//       return `<li>ele</li>`
//     })
//     return `<ul>${eachEle}</ul>`
//   }
//
//   addComment(string) {
//     var newComment = new Comment(text)
//     this.list.push(newComment);
//   }
// }
