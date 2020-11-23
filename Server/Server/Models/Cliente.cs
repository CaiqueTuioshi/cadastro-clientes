using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    [Table("Cliente")]
    public class Cliente
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "Id")]
        [Column("Id")]
        public Int64 Id { get; set; }

        [Display(Name = "Nome")]
        [Column("Nome")]
        public string Nome { get; set; }

        [Display(Name = "DataNascimento")]
        [Column("DataNascimento")]
        public DateTime DataNascimento { get; set; }

        [Display(Name = "Sexo")]
        [Column("Sexo")]
        public string? Sexo { get; set; }

        [Display(Name = "Cep")]
        [Column("Cep")]
        public string? Cep { get; set; }

        [Display(Name = "Endereço")]
        [Column("Endereco")]
        public string? Endereco { get; set; }

        [Display(Name = "Número")]
        [Column("Numero")]
        public string? Numero { get; set; }

        [Display(Name = "Complemento")]
        [Column("Complemento")]
        public string? Complemento { get; set; }

        [Display(Name = "Bairro")]
        [Column("Bairro")]
        public string? Bairro { get; set; }

        [Display(Name = "Estado")]
        [Column("Estado")]
        public string? Estado { get; set; }

        [Display(Name = "Cidade")]
        [Column("Cidade")]
        public string? Cidade { get; set; }
    }
}
