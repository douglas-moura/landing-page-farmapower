export const iniciarContagemRegressiva = (dataAlvo: Date): void => {
	const semanasEl = document.getElementById('semanas')!
	const diasEl = document.getElementById('dias')!
	const horasEl = document.getElementById('horas')!
	const minutosEl = document.getElementById('minutos')!
	const segundosEl = document.getElementById('segundos')!

	const atualizarContador = () => {
		const agora = new Date().getTime();
		const tempoRestante = dataAlvo.getTime() - agora

		if (tempoRestante <= 0) {
			clearInterval(intervalo);
			semanasEl.textContent = '0'
			diasEl.textContent = '0'
			horasEl.textContent = '00'
			minutosEl.textContent = '00'
			segundosEl.textContent = '00'
			return;
		}

		const segundos = Math.floor((tempoRestante / 1000) % 60)
		const minutos = Math.floor((tempoRestante / (1000 * 60)) % 60)
		const horas = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24)
		const diasTotais = Math.floor(tempoRestante / (1000 * 60 * 60 * 24))
		const semanas = Math.floor(diasTotais / 7)
		const dias = diasTotais % 7

		semanasEl.textContent = semanas.toString()
		diasEl.textContent = dias.toString()
		horasEl.textContent = horas.toString().padStart(2, '0')
		minutosEl.textContent = minutos.toString().padStart(2, '0')
		segundosEl.textContent = segundos.toString().padStart(2, '0')
	};

	const intervalo = setInterval(atualizarContador, 1000)
	atualizarContador(); // atualizar imediatamente
}