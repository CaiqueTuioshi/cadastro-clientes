using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using System;
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
            //if (id != usuario.Id)
            //{
            //    return NotFound();
            //}

            //if (ModelState.IsValid)
            //{
            //    try
            //    {
                    context.Update(cliente);
                    await _context.SaveChangesAsync();
            return cliente;
            //    }
            //    catch (DbUpdateConcurrencyException)
            //    {
            //        if (!UsuarioExists(usuario.Id))
            //        {
            //            return NotFound();
            //        }
            //        else
            //        {
            //            throw;
            //        }
            //    }
            //    return RedirectToAction(nameof(Index));
            //}
            //return BadRequest(usuario);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete([FromServices] Context context, int id)
        {
            context.Cliente.Remove(context.Cliente.FirstOrDefault(m => m.Id == id));
            context.SaveChangesAsync();
        }
    }
}
