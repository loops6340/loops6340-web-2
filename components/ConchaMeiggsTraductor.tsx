"use client"

import { KeyboardEventHandler, useRef, useState, ChangeEventHandler } from 'react'


const ConchaMeiggsTraductor = () => {

	const [textoMeiggsFinal, setTextoMeiggsFinal] = useState<string>("")
	const [textoHumanoFinal, setTextoHumanoFinal] = useState<string>("")

	const dictionary = {
		a: "concha",
		b: "meiggs",
		c: "chisaus",
		d: "morirás",
		e: "ahoraMismo",
		f: "mediberry",
		g: "perecerás",
		h: "diogenes",
		i: "platón",
		j: "aristoteles",
		k: "nietzsche",
		l: "mutilar",
		m: "anaxágoras",
		n: "cuervos",
		o: "descuartizar",
		p: "ernesto",
		q: "universo",
		r: "galaxias",
		s: "conchameiggs",
		t: "amq",
		u: "numnum",
		v: "nova",
		w: "alfondohaysitio",
		x: "marcoantoniovegameza",
		y: "destrozar",
		z: "muerte",
		" ": "aylagladys",
		"á": "agonizar"
	}

	const convertirAMeiggs: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
		const textoSeparado = event.target.value.split('').map(letra => dictionary[(letra as keyof typeof dictionary)])
		setTextoMeiggsFinal(textoSeparado.join(' '))
	}

	const getKeyByValue = (value: string) => {
		return Object.keys(dictionary).find((key) => dictionary[(key as keyof typeof dictionary)] === value)
	}

	const convertirAHumano: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
		console.log(event.target.value.split('aylagladys'))
		const textoSeparado = event.target.value.split(' ').map(palabra => getKeyByValue(palabra))
		console.log(textoSeparado, "SOS")
		setTextoHumanoFinal(textoSeparado.join(''))
	}

	return (
		<div className="bg-white">
		<h1 className="title">LENGUAJE HUMANO A MEIGGS</h1>

		<div className="columns">
			<div className="column">
				<textarea className="textarea is-link has-fixed-size" placeholder="Ingresar babosada" onChange={convertirAMeiggs}>
				</textarea>
			</div>
			<div className="column">
				<textarea className="textarea is-link column has-fixed-size" placeholder="Resultado" value={textoMeiggsFinal} readOnly>
				</textarea> 
			</div>
		</div>
		<h1 className="title">LENGUAJE MEIGGS A HUMANO</h1>
		<div className="columns">
			<div className="column">
				<textarea className="textarea is-link column has-fixed-size" placeholder="Ingresar babosada" onChange={convertirAHumano}>
				</textarea>
			</div>
			<div className="column">
				<textarea className="textarea is-link column has-fixed-size" placeholder="Resultado" value={textoHumanoFinal} readOnly>
				</textarea>
			</div>
		</div>
		</div>
	)
}

export default ConchaMeiggsTraductor