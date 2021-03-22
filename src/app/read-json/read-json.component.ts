


@Component({
  selector: 'app-read-json',
  templateUrl: './read-json.component.html',
  styleUrls: ['./read-json.component.scss']
})
export class ReadJsonComponent implements OnInit {

  constructor() {
    console.log('Reading local json files');
    console.log(data.basics.name);
   }
  ngOnInit(): void {
  }

}
