using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bookstore.Models
{
    [Table("Books")]
        public class Book
        {
            public int Id { get; set; }
            public string ISBN { get; set; }
            public string Name { get; set; }
            [DataType(DataType.Date)]
            public DateTime ReleaseDateTime { get; set; }

            [ForeignKey("AuthorId")]
            public virtual Author Author { get; set; }

            public float price { get; set; }

        }
    }