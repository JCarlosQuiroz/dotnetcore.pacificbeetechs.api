using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;
using Newtonsoft.Json.Serialization;
using Microsoft.Extensions.DependencyInjection;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity;
using Microsoft.OpenApi.Models;
using System;



var builder = WebApplication.CreateBuilder(args);


var configuration = builder.Configuration;
// Add services to the container.


builder.Services.AddControllersWithViews().AddNewtonsoftJson(options =>
                 options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore).AddNewtonsoftJson(options =>
                 options.SerializerSettings.ContractResolver = new DefaultContractResolver());

builder.Services.AddControllers();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() {         
        Version = "preview",
        Title = "dotnetcore.pacificbeetechs.api",
        Description = "Tool for managing Pacific Bee Technologies' projects API",
        TermsOfService = new Uri("https://pacificbeetechs.com/terms"),
        Contact = new OpenApiContact
        {
            Name = "Example Contact",
            Url = new Uri("https://pacificbeetechs.com/contact")
        },
        License = new OpenApiLicense
        {
            Name = "Example License",
            Url = new Uri("https://pacificbeetechs.com/license")
        } });
});


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();



app.UseSwaggerUI(options =>
{
    options.InjectStylesheet("/styles/swagger-ui/custom.css");
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthentication();
app.UseAuthorization();
app.UseStaticFiles();
app.MapControllers();

app.Run();
