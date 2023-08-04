function aumento(a)
{
    let b;

    if(a<=280)
    {
        b=a*0.20;
    }
    else if(a > 280 && a <= 700)
    {
        b=a*0.15;
    }
    else if(a > 700 && a <= 1500)
    {
        b=a*0.10
    }
    else if(a > 1500)
    {
        b=a*0.05;
    }
    return b;
}

function total(c,d)
{
    let soma = c+d;
    return soma;
}

let salario = parseInt(prompt('Quanto você recebe:'));

if(salario <= 280)
{
    acressimo = aumento(salario)
    novo = total(salario,acressimo);
    alert(`Salário antes do reajuste: R$${salario}\nPorcentual de aumento de 20%\nValor do aumento: R$${acressimo}\nSalário após o aumento: R$${novo}`)
}
else if(salario > 280 && salario <= 700)
{
    acressimo = aumento(salario)
    novo = total(salario,acressimo);
    alert(`Salário antes do reajuste: R$${salario}\nPorcentual de aumento de 15%\nValor do aumento: R$${acressimo}\nSalário após o aumento: R$${novo}`)
}
else if(salario > 700 && salario <= 1500)
{
    acressimo = aumento(salario)
    novo = total(salario,acressimo);
    alert(`Salário antes do reajuste: R$${salario}\nPorcentual de aumento de 10%\nValor do aumento: R$${acressimo}\nSalário após o aumento: R$${novo}`)
}
else if(salario > 1500)
{
    acressimo = aumento(salario)
    novo = total(salario,acressimo);
    alert(`Salário antes do reajuste: R$${salario}\nPorcentual de aumento de 5%\nValor do aumento: R$${acressimo}\nSalário após o aumento: R$${novo}`)
}