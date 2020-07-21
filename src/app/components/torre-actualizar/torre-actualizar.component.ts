import { Component, OnInit } from '@angular/core';
import { Torre } from '../../models/torre';
import { TorreService } from '../../services/torre.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-torre-actualizar',
  templateUrl: './torre-actualizar.component.html',
  styleUrls: ['./torre-actualizar.component.scss']
})
export class TorreActualizarComponent implements OnInit {

  torre: Torre;

  constructor(private torreService: TorreService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //Obtenemos el id de la URL
    const idTorre = this.activatedRoute.snapshot.params.id;
    this.torreService.torreById(idTorre).subscribe(
      res =>{
        this.torre = res;
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

  actualizarTorre(): void{
    const idTorre = this.activatedRoute.snapshot.params.id;
    this.torreService.actualizarTorre(idTorre, this.torre).subscribe(
      res =>{
        Swal.fire({
          title: 'Exito!',
          text: 'La torre se actualizo',
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
