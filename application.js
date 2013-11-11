$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  // console.log(todoTemplate)

  function bindEvents() {
    $('.add').on('click', function() {
      add()
    })

    $('.todo_list').on("click", ".complete", function(e) {
      e.preventDefault
      $(this).closest(".todo").addClass("complete")
    })

    $('.todo_list').on("click", ".delete", function(e) {
      e.preventDefault
      $(this).closest(".todo").remove()
    })

  }

  var add = function() {
    var input = $("input").val();
    var output = buildTodo(input);
    $('.todo_list').append(output);
  }


  // $('.add').on('click', function() {
  //   var input = $("input").val();
  //   var output = buildTodo(input);
  //   $('.todo_list').append(output);
  // })






  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }

  bindEvents();
});
