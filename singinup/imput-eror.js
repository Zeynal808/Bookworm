var users=[
    {
      username:'Zeynal',
      email:'elze808@mail.ru',
      phone:'+994998888683'
    },
{
  username:'Cebrayil',
  email:'cebrayilabbasov8@gmail.com',
  phone:'+994557677776'
},
{
   username:"Arzu",
   email:"askerofharzu@mail.ru",
   phone:'+994557252107'
},
{
    username:'Emil',
    email:'emil@mail.ru',
    phone:'+994559296023'
}
];
function yoxla(element)
{
    var username=$("#username").val();
   $('.error-input').removeClass('error-input')
    if(element.id==="username")
    {
        if(!fullname.trim())
    {
        var anaDiv=$('#username').parent();
        anaDiv.addClass('error-input');
        var span=$(anaDiv).find('span');
        span.html("Adiniz nedir?")

       //bura ad yerinin bosh olmamasi ucundur
    }

    }

    else 
    {
        for(let user of users)
        {
            if(username.toLowerCase()===user.username.toLowerCase())
            {
                //bura baskasinin emailini istifade edende yoxlanir
                var anaDiv=$('#username').parent();
                anaDiv.addClass("error-input");
                var span=anaDiv.find('span');
                span.html('Bu ad artig istifade olunur')
                
                break;
            }
            
        }
    }

}
$('.username, .email').on('input',function()
{
    yoxla(this);
})