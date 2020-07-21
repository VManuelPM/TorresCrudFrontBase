import { Component, OnInit } from '@angular/core';
import { Torre } from '../../models/torre';
import { TorreService } from '../../services/torre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-torre',
  templateUrl: './torre.component.html',
  styleUrls: ['./torre.component.scss']
})
export class TorreComponent implements OnInit {

  torres: Torre[] = [];

  constructor(private torreService: TorreService) { }

  ngOnInit(): void {
    this.listarTorres();
  }

  listarTorres(): void {
    this.torreService.listaTorre().subscribe(res => {
      this.torres = res;
    },
      err => {
        console.log(err);
      }
    );
  }

  eliminarTorre(idTorre: number){
    this.torreService.borrarTorre(idTorre).subscribe(
      res =>{
        Swal.fire({
          title: 'Eliminada!',
          text: 'Se borro la torre correctamente',
          icon: 'success',
          confirmButtonText: 'ok'
        });
        this.listarTorres();
      },
      err =>{
        Swal.fire({
          title: 'Error',
          text: `Error: ${err.error.mensaje}`,
          icon: 'error',
          confirmButtonText: 'ok'
        });
      }
    )
  }

}
