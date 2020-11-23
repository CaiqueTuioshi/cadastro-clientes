using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    [Table("Cliente")]
    public class Cliente
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "Id")]
        [Column("Id")]
        [Required]
        public int Id { get; set; }

        [Display(Name = "Nome")]
        [Column("Nome")]
        [Required]
        [MaxLength(70)]
        public string Nome { get; set; }

        [Display(Name = "DataNascimento")]
        [Column("DataNascimento")]
        [Required]
        public DateTime DataNascimento { get; set; }

        [Display(Name = "Sexo")]
        [Column("Sexo")]
        [MaxLength(10)]
        public string? Sexo { get; set; }

        [Display(Name = "Cep")]
        [Column("Cep")]
        [MaxLength(8)]
        public string? Cep { get; set; }

        [Display(Name = "Endereço")]
        [Column("Endereco")]
        [MaxLength(70)]
        public string? Endereco { get; set; }

        [Display(Name = "Número")]
        [Column("Numero")]
        [MaxLength(10)]
        public string? Numero { get; set; }

        [Display(Name = "Complemento")]
        [Column("Complemento")]
        [MaxLength(20)]
        public string? Complemento { get; set; }

        [Display(Name = "Bairro")]
        [Column("Bairro")]
        [MaxLength(30)]
        public string? Bairro { get; set; }

        [Display(Name = "Estado")]
        [Column("Estado")]
        [MaxLength(20)]
        public string? Estado { get; set; }

        [Display(Name = "Cidade")]
        [Column("Cidade")]
        [MaxLength(50)]
        public string? Cidade { get; set; }
    }
}
