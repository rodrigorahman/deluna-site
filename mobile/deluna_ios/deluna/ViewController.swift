//
//  ViewController.swift
//  deluna
//
//  Created by Rodrigo Silva Rahman de Almeida on 19/03/17.
//  Copyright © 2017 Deluna. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var box: UIView!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        box.layer.borderWidth = 1
        box.layer.borderColor = UIColor.black.cgColor
        box.layer.cornerRadius = 40
        box.clipsToBounds = true
        
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
    }

}

