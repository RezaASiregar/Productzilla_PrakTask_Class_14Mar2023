class AccountBank {
    noRekening;
    saldo;

    setNoRekening(rekening) {
        this.noRekening = rekening;
    }

    setSaldo(saldo){
        this.saldo = saldo;
    }

    deposit(depo){
        return this.saldo += depo;
    }

    tarik(ambil){
        if (ambil > this.saldo) {
      return "Saldo tidak cukup untuk melakukan penarikan";
    } else {
        this.saldo -= ambil;
      return (ambil);
    }
    }

    cek(){
        return this.saldo;
    }
    
}

// ====== 1 =======
const account1 = new AccountBank();
account1.setNoRekening(123456789);
account1.setSaldo(100000);

const account1Deposit = account1.deposit(100000);
const account1Tarik = account1.tarik(40000);
const account1Cek = account1.cek();
console.log('=== Account Pertama ===');
console.log('anda tarik sebanyak Rp', account1Tarik, '. Sisa saldo anda Rp', account1Cek);

// ====== 2 =======
const account2 = new AccountBank();
account2.setNoRekening(111111111);
account2.setSaldo(10000);

const account2Deposit = account2.deposit(50000);
const account2Tarik = account2.tarik(300000);
const account2Cek = account2.cek();
console.log('=== Account Kedua ===')
console.log(account2Tarik, '. Sisa saldo anda Rp', account2Cek);