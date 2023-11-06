import { Body, Controller, Delete, Get, Param, Post, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { coffeedto } from './app.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('coffee')
  async getHello( ) : Promise<object> {
    const coffees = await this.appService.findAll();
    return { coffees };
}

  @Post('add')
  async create(@Body() coffeedtos: coffeedto,  @Res() res) {

    try {
      await this.appService.addcoffee(coffeedtos);
      return res.redirect('/');
    } catch (error) {
      // Handle errors here
      console.error('Error adding coffee data:', error);
    }
  }




  @Get('addcoffee')
  @Render('addcoffee')
  async addcoffee( @Res() res){

  }

  @Get('delete/:id') // Added ':id' to the route to capture the 'id' parameter
  async dheletecoffee(@Param('id') id : number, @Res() res) {

    try {

      const number = id;
      this.appService.deletebyid(number);
      this.appService.delete(number);
      return res.redirect('/');


    } catch (error) {
      // Handle errors here
      console.error('Error adding coffee data:', error);


    }

  }

  @Post('view/:id')
  @Render('viewcoffee')
  async VIE(@Param('id') id : number, @Res() res) {


      const number = id;
      const coffees = this.appService.viewCoffeeById(number);


      const flavour: string = (await coffees).flavour;
      const name: string = (await coffees).name;
      const size: string = (await coffees).size;
      const price: number = (await coffees).price;
      const strength: string = (await coffees).strength;
      const imageurl: string = (await coffees).imageurl;




      return { title: flavour,
        flavour: flavour,
        imageurl: imageurl,
         strength: strength,
         price : price,
         size: size,
         name: name,

        };
  }

  @Get('view/:id')
  @Render('viewcoffee')
  async VIbE(@Param('id') id : number, @Res() res) {


      const number = id;
      const coffees = this.appService.viewCoffeeById(number);

      const flavour: string = (await coffees).flavour;
      const name: string = (await coffees).name;
      const size: string = (await coffees).size;
      const price: number = (await coffees).price;
      const strength: string = (await coffees).strength;
      const imageurl: string = (await coffees).imageurl;



      return { title: flavour,
        flavour: flavour,
        imageurl: imageurl,
         strength: strength,
         price : price,
         size: size,
         name: name,

        };
  }




}
