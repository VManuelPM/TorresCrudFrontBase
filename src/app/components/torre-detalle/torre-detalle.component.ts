import { Component, OnInit } from '@angular/core';
import { TorreService } from '../../services/torre.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Torre } from '../../models/torre';


@Component({
  selector: 'app-torre-detalle',
  templateUrl: './torre-detalle.component.html',
  styleUrls: ['./torre-detalle.component.scss']
})
export class TorreDetalleComponent implements OnInit {

  torre: Torre;

  constructor(private torreService: TorreService, private activatedRoute: ActivatedRoute, private router: Router ) { }

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
        this.atras();
      }
    );
  }

  atras(): void{
    this.router.navigate(['/']);
  }


}
