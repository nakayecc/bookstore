using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bookstore.Models
{
    [Table("Authors")]
    public class Author
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Book> Books { get; set; }
    }
}