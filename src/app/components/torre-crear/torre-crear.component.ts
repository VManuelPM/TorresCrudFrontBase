import { Component, OnInit } from '@angular/core';
import { TorreService } from '../../services/torre.service';
import { Torre } from '../../models/torre';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-torre-crear',
  templateUrl: './torre-crear.component.html',
  styleUrls: ['./torre-crear.component.scss']
})
export class TorreCrearComponent implements OnInit {

  nombreTorre = '';
  cantidadAptos: number;


  constructor(private torreService: TorreService, private router: Router) { }

  ngOnInit(): void {
  }

  crearTorre(): void {
    const torre = new Torre(this.nombreTorre, this.cantidadAptos);
    this.torreService.crearTorre(torre).subscribe(
    res =>{
      Swal.fire({
        title: 'Exito!',
        text: 'Se creo la torre correctamente',
        icon: 'success',
        confirmButtonText: 'ok'
      });
      this.router.navigate(['/']);
    },
    err =>{
      Swal.fire({
        title: 'Error',
        text: `Error: ${err.error.mensaje}`,
        icon: 'error',
        confirmButtonText: 'ok'
      });
      this.router.navigate(['/']);
    }
    );
  }

}
