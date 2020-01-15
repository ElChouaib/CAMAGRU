function comment(event)
{
 var postid = (event.target && event.target.getAttribute('data-c-post_id'));
 var userid = (event.target && event.target.getAttribute('data-c-user_id'));
 var comment_id = "comment_" + postid;
 var co = document.getElementsByName(comment_id);
 var com = co[0].value;
 if(com.trim() == "" && userid != ""){
   co[0].placeholder = 'Please enter valid comment';
   return ;
 }
 if (userid == "") {

   return;
 }
  var xhttp = new XMLHttpRequest();
 var params = "post_id=" + postid + "&user_id=" + userid + "&content=" + com;
 xhttp.open('POST', 'http://localhost/Camagru/Posts/comment');
 xhttp.withCredentials = true;
 xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 xhttp.send(params);
 location.reload();
}