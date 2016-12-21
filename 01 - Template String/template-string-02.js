const value = 'variáveis';

const palavras = ['muito', 'legal'];

const html = 
	`
		<div class="container">
			<ul>
				<li>Com template String</li>
				<li>Pode-se escrever</li>
				<li>strings, com quebras de linhas</li>
				<li>e identadas, além de poder utilizar</li>
				<li>comandos e mostrar valor de ${value}</li>
				<li>olha só abaixo</li>
				${palavras.map(palavra => `<li>${palavra}</li>`)}
			</ul>
		</div>
	`;

alert(html);