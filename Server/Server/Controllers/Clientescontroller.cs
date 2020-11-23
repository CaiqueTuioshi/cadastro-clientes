using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/clientes")]
    public class Clientescontroller
    {
        private readonly Context _context;

        public Clientescontroller(Context context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<List<Cliente>>> findAll()
        {
            return await _context.Cliente.ToListAsync();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<Cliente>> findById(int id)
        {
            return await _context.Cliente.FindAsync(id);
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Cliente>> save([FromBody] Cliente cliente)
        {
            _context.Cliente.Add(cliente);
            await _context.SaveChangesAsync();
            return cliente;
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult<Cliente>> Edit(int id, Cliente cliente)
        {
            _context.Update(cliente);
            await _context.SaveChangesAsync();
            return cliente;
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {
            _context.Cliente.Remove(_context.Cliente.FirstOrDefault(cliente => cliente.Id == id));
            _context.SaveChangesAsync();
        }
    }
}
