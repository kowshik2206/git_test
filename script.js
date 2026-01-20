function Book(title,author,status)
{
    this.title = title;
    this.author = author;
    this.status = status;
    this.theHobbitinfo = function()
    {
        return (title,author,status);

    }
    console.log(title + author + status);
    

}
const ram = new Book("ram","kowshik","not_read_yet")
ram.theHobbitinfo();



