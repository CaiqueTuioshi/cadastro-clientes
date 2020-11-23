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
        public async Task<ActionResult<List<Cliente>>> findAll([FromServices] Context context)
        {
            return await context.Cliente.ToListAsync();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<Cliente>> findById([FromServices] Context context, int id)
        {
            return await context.Cliente.FindAsync(id);
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Cliente>> save([FromServices] Context context, [FromBody] Cliente cliente)
        {
            context.Cliente.Add(cliente);
            await context.SaveChangesAsync();
            return cliente;
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult<Cliente>> Edit([FromServices] Context context, int id, Cliente cliente)
        {
            context.Update(cliente);
            await _context.SaveChangesAsync();
            return cliente;
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete([FromServices] Context context, int id)
        {
            context.Cliente.Remove(context.Cliente.FirstOrDefault(cliente => cliente.Id == id));
            context.SaveChangesAsync();
        }
    }
}
